import countries from "../index";
describe("Tests for `countries` api function", function () {
  it("should get basic data on the country canada", async () => {
    const data = await countries.getCountry("canada");
    expect(data).toEqual({
      capital: "Ottawa",
      region: "Americas",
      numericCode: "124",
    });
  });

  /** Add test for getRegionCountries function here */
  it("should get EU countries", async () => {
    const data = await countries.getRegionCountries("eu");
    expect(data).toEqual([      
    'Åland Islands',  'Austria',
    'Belgium',        'Bulgaria',
    'Croatia',        'Cyprus',
    'Czech Republic', 'Denmark',
    'Estonia',        'Finland',
    'France',         'French Guiana',
    'Germany',        'Gibraltar',
    'Greece',         'Hungary',
    'Ireland',        'Isle of Man',
    'Italy',          'Latvia',
    'Lithuania',      'Luxembourg',
    'Malta',          'Netherlands',
    'Poland',         'Portugal',
    'Romania',        'Slovakia',
    'Slovenia',       'Spain',
    'Sweden'
    ]);
  });

  it("should get capitals of NAFTA countries", async () => {
    const data = await countries.getRegionCapitals("nafta");
    expect(data).toEqual(["Ottawa", "Mexico City", "Washington, D.C."]);
  });
});
