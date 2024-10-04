import tkinter as tk
import openai

# OpenAI APIキーを設定
openai.api_key = 'YOUR_API_KEY'  # ここにAPIキーを入力

# タスク解析を行う関数
def analyze_task():
    task_description = task_entry.get()  # ユーザーが入力したタスク説明を取得
    result_label.config(text="Analyzing...")  # 処理中メッセージを表示

    try:
        # 第一原理的な分解と類推のアプローチをOpenAI APIにリクエスト
        response = openai.Completion.create(
            engine="text-davinci-003",
            prompt=f"Task: {task_description}\n\n"
                   f"Break down this task into its first principles and suggest a solution using past experiences and analogies:",
            max_tokens=150,
            temperature=0.7
        )
        # 生成された応答を取得
        analysis = response.choices[0].text.strip()
        result_label.config(text=analysis)  # 応答を結果ラベルに表示

    except Exception as e:
        result_label.config(text=f"Error: {e}")  # エラーが発生した場合は表示

# GUIの作成
root = tk.Tk()
root.title("Task Management with First Principles and Analogies")

# タスク入力ラベルとエントリーボックス
task_label = tk.Label(root, text="Enter your task:")
task_label.pack()

task_entry = tk.Entry(root, width=50)
task_entry.pack()

# タスク解析ボタン
analyze_button = tk.Button(root, text="Analyze Task", command=analyze_task)
analyze_button.pack()

# 結果表示ラベル
result_label = tk.Label(root, text="", wraplength=400)
result_label.pack()

# GUIループの開始
root.mainloop()
