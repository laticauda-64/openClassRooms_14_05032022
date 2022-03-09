export default function getEmployees() {
	return [
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
}
