/**
 * List of availables States in form
 */

export const getStates = () => [
	{ label: "Alabama", "alpha-2": "AL" },
	{ label: "Alaska", "alpha-2": "AK" },
	{ label: "Arizona", "alpha-2": "AZ" },
	{ label: "Arkansas", "alpha-2": "AR" },
	{ label: "California", "alpha-2": "CA" },
	{ label: "Colorado", "alpha-2": "CO" },
	{ label: "Connecticut", "alpha-2": "CT" },
	{ label: "Delaware", "alpha-2": "DE" },
	{ label: "District of Columbia", "alpha-2": "DC" },
	{ label: "Florida", "alpha-2": "FL" },
	{ label: "Georgia", "alpha-2": "GA" },
	{ label: "Hawaii", "alpha-2": "HI" },
	{ label: "Idaho", "alpha-2": "ID" },
	{ label: "Illinois", "alpha-2": "IL" },
	{ label: "Indiana", "alpha-2": "IN" },
	{ label: "Iowa", "alpha-2": "IA" },
	{ label: "Kansa", "alpha-2": "KS" },
	{ label: "Kentucky", "alpha-2": "KY" },
	{ label: "Lousiana", "alpha-2": "LA" },
	{ label: "Maine", "alpha-2": "ME" },
	{ label: "Maryland", "alpha-2": "MD" },
	{ label: "Massachusetts", "alpha-2": "MA" },
	{ label: "Michigan", "alpha-2": "MI" },
	{ label: "Minnesota", "alpha-2": "MN" },
	{ label: "Mississippi", "alpha-2": "MS" },
	{ label: "Missouri", "alpha-2": "MO" },
	{ label: "Montana", "alpha-2": "MT" },
	{ label: "Nebraska", "alpha-2": "NE" },
	{ label: "Nevada", "alpha-2": "NV" },
	{ label: "New Hampshire", "alpha-2": "NH" },
	{ label: "New Jersey", "alpha-2": "NJ" },
	{ label: "New Mexico", "alpha-2": "NM" },
	{ label: "New York", "alpha-2": "NY" },
	{ label: "North Carolina", "alpha-2": "NC" },
	{ label: "North Dakota", "alpha-2": "ND" },
	{ label: "Ohio", "alpha-2": "OH" },
	{ label: "Oklahoma", "alpha-2": "OK" },
	{ label: "Oregon", "alpha-2": "OR" },
	{ label: "Pennsylvania", "alpha-2": "PA" },
	{ label: "Rhode Island", "alpha-2": "RI" },
	{ label: "South Carolina", "alpha-2": "SC" },
	{ label: "South Dakota", "alpha-2": "SD" },
	{ label: "Tennessee", "alpha-2": "TN" },
	{ label: "Texas", "alpha-2": "TX" },
	{ label: "Utah", "alpha-2": "UT" },
	{ label: "Vermont", "alpha-2": "VT" },
	{ label: "Virginia", "alpha-2": "VA" },
	{ label: "Washington", "alpha-2": "WA" },
	{ label: "West Virginia", "alpha-2": "WV" },
	{ label: "Wisconsin", "alpha-2": "WI" },
	{ label: "Wyoming", "alpha-2": "WY" },
];

/**
 * List of availables departments in company
 */

export const getDepartments = () => [
	{
		label: "Sales",
	},
	{
		label: "Marketing",
	},
	{
		label: "Engineering",
	},
	{
		label: "Human Resources",
	},
	{
		label: "Legal",
	},
];

/**
 * Mocked Employees for initializing store
 */

export const getEmployees = () => [
	{
		id: 1,
		private: {
			firstName: "John",
			lastName: "Doe",
			birthDate: 457653600000,
			street: "111 8th Ave",
			city: "New York",
			state: "New York",
			zip: "10011",
		},
		company: {
			startDate: 1616367600000,
			department: "SALES",
		},
	},
	{
		id: 2,
		private: {
			firstName: "Patrick",
			lastName: "Chaun",
			birthDate: 457653600000,
			street: "65 las vegas boulevard",
			city: "Las Vegas",
			state: "Nevada",
			zip: "88901",
		},
		company: {
			startDate: 1616367600000,
			department: "SALES",
		},
	},
	{
		id: 3,
		private: {
			firstName: "Delphine",
			lastName: "Doe",
			birthDate: 457653600000,
			street: "3 Beale Street",
			city: "Memphis",
			state: "Tennesse",
			zip: "37501",
		},
		company: {
			startDate: 1616367600000,
			department: "SALES",
		},
	},
];
