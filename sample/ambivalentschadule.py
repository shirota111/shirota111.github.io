import tkinter as tk
from tkinter import messagebox

# メインウィンドウの設定
root = tk.Tk()
root.title("Mindset Intervention Journal")
root.geometry("500x400")

# ラベルとテキストボックス
def create_label_entry(text, row):
    label = tk.Label(root, text=text)
    label.grid(row=row, column=0, pady=10)
    entry = tk.Entry(root, width=50)
    entry.grid(row=row, column=1)
    return entry

goal_entry = create_label_entry("Goal", 0)
obstacle_entry = create_label_entry("Obstacle", 1)
emotion_entry = create_label_entry("Current Emotion", 2)
action_entry = create_label_entry("Action Plan", 3)

# 保存ボタンの機能
def save_entry():
    goal = goal_entry.get()
    obstacle = obstacle_entry.get()
    emotion = emotion_entry.get()
    action = action_entry.get()
    
    with open("mindset_journal.txt", "a") as file:
        file.write(f"Goal: {goal}\n")
        file.write(f"Obstacle: {obstacle}\n")
        file.write(f"Emotion: {emotion}\n")
        file.write(f"Action: {action}\n\n")
    
    messagebox.showinfo("Saved", "Your entry has been saved!")

# ボタンの設定
save_button = tk.Button(root, text="Save Entry", command=save_entry)
save_button.grid(row=4, column=1, pady=20)

# GUIのループ開始
root.mainloop()