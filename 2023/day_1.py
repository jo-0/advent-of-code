from input import day_1_input


def get_correct_calibration_value(calibration_values: list[str]) -> list[int]:
    correct_values: list[int] = []
    for value in calibration_values:
        # combine first and last digit
        digits_from_calibration_value: list[str] = [v for v in value if v.isdigit()]
        num = int(digits_from_calibration_value[0] + digits_from_calibration_value[-1])
        correct_values.append(num)

    return correct_values


sum_of_calibration_values: int = sum(
    get_correct_calibration_value(calibration_values=day_1_input)
)
print(sum_of_calibration_values)
