function nameSurnameAge(name: string, surname: string, age: number) {
  return name.slice(0, 2) + surname.slice(0, 2) + age;
}

describe("demo test 1", () => {
  let name: string, surname: string, age: number, output: string;

  it("A = [1, 3, 6, 4, 1, 2], should return 5", () => {
    (name = "John"), (surname = "Firelord"), (age = 8), (output = "JoFi8");
    expect(nameSurnameAge(name, surname, age)).toBe(output);
  });
});
