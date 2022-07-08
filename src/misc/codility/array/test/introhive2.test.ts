function daysOfTheWeek(day: string, later: number) {
  let dayPick: Record<string, number> = {
    Mon: 1,
    Tue: 2,
    Wed: 3,
    Thu: 4,
    Fri: 5,
    Sat: 6,
    Sun: 7,
  };

  let nowNum = dayPick[day];

  let laterNum = (nowNum + later) % 7;

  let result = Object.entries(dayPick).find(([day, num]) => {
    if (num === laterNum) {
      return day;
    }
  });

  return result![0];
}

describe("demo test 1", () => {
  let day, later, output;

  it(`day = "Sat", later = 23, output = "Mon"`, () => {
    (day = "Sat"), (later = 23), (output = "Mon");
    expect(daysOfTheWeek(day, later)).toBe(output);
  });

  it(`day = "Wed", later = 2, output = "Fri"`, () => {
    (day = "Wed"), (later = 2), (output = "Fri");
    expect(daysOfTheWeek(day, later)).toBe(output);
  });

  it(`day = "Tue", later = 14, output = "Tue"`, () => {
    (day = "Tue"), (later = 14), (output = "Tue");
    expect(daysOfTheWeek(day, later)).toBe(output);
  });
});
