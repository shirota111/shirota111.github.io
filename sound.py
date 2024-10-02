import tkinter as tk
from tkinter import messagebox
from gtts import gTTS
import os

def save_audio():
    text = text_entry.get("1.0", "end-1c")  # テキストエリアからテキストを取得
    if not text.strip():
        messagebox.showwarning("警告", "テキストを入力してください。")
        return

    try:
        tts = gTTS(text=text, lang='ja')  # 日本語で音声を生成
        file_path = "output.mp3"
        tts.save(file_path)  # 音声を保存
        messagebox.showinfo("成功", f"音声が'{file_path}'に保存されました。")
    except Exception as e:
        messagebox.showerror("エラー", str(e))

# GUIの設定
root = tk.Tk()
root.title("テキスト音声変換器")

# テキスト入力エリア
text_entry = tk.Text(root, height=10, width=50)
text_entry.pack(pady=10)

# 保存ボタン
save_button = tk.Button(root, text="音声を保存", command=save_audio)
save_button.pack(pady=5)

# GUIのメインループ
root.mainloop()