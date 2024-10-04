import spacy
import openai

# OpenAIのAPIキーを設定
openai.api_key = "YOUR_API_KEY"

# NLPモデルのロード
nlp = spacy.load("en_core_web_sm")

# 第一原理思考による要素分解
def first_principle_decomposition(task):
    doc = nlp(task)
    elements = {token.text: token.dep_ for token in doc}
    return elements

# OpenAIを使った解決策生成
def openai_solution(elements):
    prompt = f"Given the following elements: {elements}, suggest potential solutions."
    response = openai.ChatCompletion.create(
        model="gpt-3.5-turbo",
        messages=[
            {"role": "user", "content": prompt}
        ]
    )
    return response.choices[0].message['content']

# ユーザーからの入力を受け取る
user_input = input("Enter a task: ")

# 第一原理思考による分解
elements = first_principle_decomposition(user_input)
print(f"Decomposed Elements: {elements}")

# OpenAIによる解決策生成
generated_solution = openai_solution(elements)
print("Generated Solutions:")
print(generated_solution)
