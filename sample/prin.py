import tkinter as tk
from tkinter import messagebox
import spacy

# NLPモデルのロード
nlp = spacy.load("en_core_web_sm")

class FirstPrinciplesApp:
    def __init__(self, root):
        self.root = root
        self.root.title("第一原理と類推の区別")

        # ステップ1: 問題の入力
        self.label1 = tk.Label(root, text="解決したい問題を入力してください:")
        self.label1.pack()
        self.problem_entry = tk.Entry(root, width=50)
        self.problem_entry.pack()

        # ステップ2: 基本要素の特定
        self.button1 = tk.Button(root, text="問題を分解", command=self.decompose_problem)
        self.button1.pack()

        # ステップ3: 前提の質問
        self.label2 = tk.Label(root, text="前提を入力してください:")
        self.label2.pack()
        self.premise_entry = tk.Entry(root, width=50)
        self.premise_entry.pack()

        self.button2 = tk.Button(root, text="前提を吟味", command=self.evaluate_premise)
        self.button2.pack()

        # ステップ4: 新しい解決策の構築
        self.label3 = tk.Label(root, text="新しい解決策を入力してください:")
        self.label3.pack()
        self.solution_entry = tk.Entry(root, width=50)
        self.solution_entry.pack()

        self.button3 = tk.Button(root, text="解決策を構築", command=self.build_solution)
        self.button3.pack()

        # ステップ5: 実践と検証
        self.label4 = tk.Label(root, text="結果を入力してください:")
        self.label4.pack()
        self.result_entry = tk.Entry(root, width=50)
        self.result_entry.pack()

        self.button4 = tk.Button(root, text="結果を検証", command=self.verify_result)
        self.button4.pack()

    def decompose_problem(self):
        problem = self.problem_entry.get()
        # 問題をNLPで分解
        doc = nlp(problem)
        elements = {token.text: token.dep_ for token in doc}
        messagebox.showinfo("分解された要素", f"要素: {elements}")

    def evaluate_premise(self):
        premise = self.premise_entry.get()
        # 前提を簡単に吟味する
        messagebox.showinfo("前提の吟味", f"前提: {premise}")

    def build_solution(self):
        solution = self.solution_entry.get()
        messagebox.showinfo("新しい解決策", f"解決策: {solution}")

    def verify_result(self):
        result = self.result_entry.get()
        messagebox.showinfo("結果の検証", f"結果: {result}")

if __name__ == "__main__":
    root = tk.Tk()
    app = FirstPrinciplesApp(root)
    root.mainloop()
