import spacy

# NLPモデルのロード
nlp = spacy.load("en_core_web_sm")

# 第一原理思考による要素分解
def first_principle_decomposition(task):
    doc = nlp(task)
    elements = {token.text: token.dep_ for token in doc}
    return elements

# 類推による解決策生成
def analogy_solution(elements):
    solutions = []
    if "design" in elements:
        solutions.append("Look for design templates used in similar projects.")
    if "code" in elements:
        solutions.append("Check GitHub for similar repositories.")
    return solutions

# ユーザーからの入力を受け取る
user_input = input("Enter a task: ")

# 第一原理思考による分解
elements = first_principle_decomposition(user_input)
print(f"Decomposed Elements: {elements}")

# 類推による解決策生成
generated_solutions = analogy_solution(elements)
print("Generated Solutions:")
for solution in generated_solutions:
    print(f"- {solution}")
