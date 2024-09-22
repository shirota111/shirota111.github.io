import tkinter as tk
from tkinter import messagebox

# タスクの管理クラス
class TaskManager:
    def __init__(self, root):
        self.root = root
        self.root.title("第一原理思考と類推を利用したタスク管理")

        # タスク表示エリア
        self.task_listbox = tk.Listbox(root, height=10, width=50)
        self.task_listbox.pack(pady=10)

        # タスク追加エリア
        self.entry = tk.Entry(root, width=50)
        self.entry.pack(pady=5)
        self.add_task_button = tk.Button(root, text="タスクを追加", command=self.add_task)
        self.add_task_button.pack(pady=5)

        # 解決策表示エリア
        self.solution_label = tk.Label(root, text="解決策がここに表示されます", wraplength=400)
        self.solution_label.pack(pady=20)

        # 第一原理と類推のボタン
        self.first_principle_button = tk.Button(root, text="第一原理思考を適用", command=self.apply_first_principles)
        self.first_principle_button.pack(side="left", padx=10)

        self.analogy_button = tk.Button(root, text="類推を適用", command=self.apply_analogy)
        self.analogy_button.pack(side="right", padx=10)

    # タスクを追加する
    def add_task(self):
        task = self.entry.get()
        if task:
            self.task_listbox.insert(tk.END, task)
            self.entry.delete(0, tk.END)
        else:
            messagebox.showwarning("入力エラー", "タスクを入力してください！")

    # 第一原理思考を適用してタスクを分解し再構築する
    def apply_first_principles(self):
        selected_task = self.get_selected_task()
        if selected_task:
            # タスクを分解
            parts = selected_task.split(' ')
            breakdown = "\n".join([f"要素 {i + 1}: {part}" for i, part in enumerate(parts)])
            
            # 要素を再構築
            reconstructed = " ".join(reversed(parts))

            # 結果を表示
            solution_text = f"【第一原理思考による分解】\n{breakdown}\n\n【再構築した解決策】\n{reconstructed}"
            self.solution_label.config(text=solution_text)
        else:
            messagebox.showwarning("選択エラー", "タスクを選択してください！")

    # 類推による解決策を適用する
    def apply_analogy(self):
        selected_task = self.get_selected_task()
        if selected_task:
            analogy_solution = f"【類推による解決策】\n「{selected_task}」に似た問題解決の成功例を参考にして解決。"
            self.solution_label.config(text=analogy_solution)
        else:
            messagebox.showwarning("選択エラー", "タスクを選択してください！")

    # 選択されたタスクを取得する
    def get_selected_task(self):
        try:
            selected_task = self.task_listbox.get(self.task_listbox.curselection())
            return selected_task
        except tk.TclError:
            return None


# GUIを開始する
if __name__ == "__main__":
    root = tk.Tk()
    task_manager = TaskManager(root)
    root.mainloop()
