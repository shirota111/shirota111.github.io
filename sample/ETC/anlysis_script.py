import re
import logging
from enum import Enum

logging.basicConfig(level=logging.INFO)

class ErrorType(Enum):
    SYNTAX = "Syntax Error"
    RUNTIME = "Runtime Error"
    LOGICAL = "Logical Error"
    COMPILE = "Compile Error"

class Priority(Enum):
    HIGH = "High Priority"
    MEDIUM = "Medium Priority"
    LOW = "Low Priority"

class Error:
    def __init__(self, message, error_type, priority):
        self.message = message
        self.error_type = error_type
        self.priority = priority

    def __repr__(self):
        return f"{self.error_type.value}: {self.message} ({self.priority.value})"

def classify_error(message):
    if re.search(r"SyntaxError", message):
        return ErrorType.SYNTAX
    elif re.search(r"RuntimeError", message):
        return ErrorType.RUNTIME
    elif re.search(r"TypeError|NameError", message):
        return ErrorType.COMPILE
    else:
        return ErrorType.LOGICAL

def determine_priority(error):
    if error.error_type in [ErrorType.SYNTAX, ErrorType.COMPILE]:
        return Priority.HIGH
    elif error.error_type == ErrorType.RUNTIME:
        return Priority.MEDIUM
    else:
        return Priority.LOW

def parse_log(log):
    errors = []
    for line in log.splitlines():
        if "Error" in line:
            error_type = classify_error(line)
            priority = determine_priority(error_type)
            errors.append(Error(line, error_type, priority))
    return errors

def create_tasks(errors):
    tasks = {
        "Syntax Errors": [],
        "Runtime Errors": [],
        "Logical Errors": [],
        "Compile Errors": []
    }
    for error in errors:
        if error.error_type == ErrorType.SYNTAX:
            tasks["Syntax Errors"].append(error)
        elif error.error_type == ErrorType.RUNTIME:
            tasks["Runtime Errors"].append(error)
        elif error.error_type == ErrorType.LOGICAL:
            tasks["Logical Errors"].append(error)
        elif error.error_type == ErrorType.COMPILE:
            tasks["Compile Errors"].append(error)
    return tasks

def main():
    log_data = """
    SyntaxError: invalid syntax
    RuntimeError: division by zero
    NameError: name 'x' is not defined
    TypeError: unsupported operand type(s) for +: 'int' and 'str'
    """

    errors = parse_log(log_data)
    tasks = create_tasks(errors)

    logging.info("Errors parsed and classified:")
    for task_type, task_list in tasks.items():
        logging.info(f"{task_type}:")
        for task in task_list:
            logging.info(f"  - {task}")

if __name__ == "__main__":
    main()