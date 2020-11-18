package problem0690

type Employee struct {
	Id           int
	Importance   int
	Subordinates []int
}

// dfs
func getImportance(employees []*Employee, id int) int {
	m := make(map[int]*Employee, 0)
	for _, employee := range employees {
		m[employee.Id] = employee
	}

	var helper func(id int) int
	helper = func(id int) int {
		importance := m[id].Importance
		for _, subId := range m[id].Subordinates {
			importance += helper(subId)
		}
		return importance
	}

	return helper(id)
}

// bfs
func getImportance1(employees []*Employee, id int) int {
	m := make(map[int]*Employee, 0)
	for _, employee := range employees {
		m[employee.Id] = employee
	}
	importance := 0
	queue := []int{id}

	for len(queue) > 0 {
		importance += m[queue[0]].Importance
		for _, subId := range m[queue[0]].Subordinates {
			queue = append(queue, subId)
		}
		queue = queue[1:]
	}
	return importance
}
