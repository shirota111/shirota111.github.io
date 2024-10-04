import numpy as np
import matplotlib.pyplot as plt
from tensorflow.keras.datasets import mnist
from tensorflow.keras.layers import Input, Dense, Reshape, Flatten
from tensorflow.keras.models import Sequential, Model
from tensorflow.keras.optimizers import Adam

# MNISTデータセットの読み込み
(X_train, _), (_, _) = mnist.load_data()
X_train = X_train / 127.5 - 1.0
X_train = np.expand_dims(X_train, axis=-1)

# Generatorの定義
generator = Sequential([
    Dense(128, input_dim=100, activation='relu'),
    Dense(256, activation='relu'),
    Dense(512, activation='relu'),
    Dense(784, activation='tanh'),
    Reshape((28, 28, 1))
])

# Discriminatorの定義
discriminator = Sequential([
    Flatten(input_shape=(28, 28, 1)),
    Dense(512, activation='relu'),
    Dense(256, activation='relu'),
    Dense(1, activation='sigmoid')
])

# GeneratorとDiscriminatorの結合（GANの定義）
discriminator.compile(loss='binary_crossentropy', optimizer=Adam(), metrics=['accuracy'])
discriminator.trainable = False

gan_input = Input(shape=(100,))
gan_output = discriminator(generator(gan_input))
gan = Model(gan_input, gan_output)
gan.compile(loss='binary_crossentropy', optimizer=Adam())

# GANの学習ループ
def train_gan(epochs, batch_size):
    for epoch in range(epochs):
        noise = np.random.normal(0, 1, size=[batch_size, 100])
        generated_images = generator.predict(noise)

        batch_real_images = X_train[np.random.randint(0, X_train.shape[0], size=batch_size)]

        X = np.concatenate([batch_real_images, generated_images])
        y_dis = np.zeros(2 * batch_size)
        y_dis[:batch_size] = 0.9  # 本物の画像は1に近い値にする

        discriminator.trainable = True
        d_loss = discriminator.train_on_batch(X, y_dis)

        noise = np.random.normal(0, 1, size=[batch_size, 100])
        y_gen = np.ones(batch_size)

        discriminator.trainable = False
        g_loss = gan.train_on_batch(noise, y_gen)

        print(f"Epoch {epoch}, Discriminator Loss: {d_loss}, Generator Loss: {g_loss}")

# GANの学習
train_gan(epochs=10000, batch_size=128)
