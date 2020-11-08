package problem1603

// 感觉做这种题就是在逃避一些不会的题。。。
type ParkingSystem struct {
	arr []int
}

func Constructor(big int, medium int, small int) ParkingSystem {
	return ParkingSystem{[]int{big, medium, small}}
}

func (this *ParkingSystem) AddCar(carType int) bool {
	if this.arr[carType-1] > 0 {
		this.arr[carType-1]--
		return true
	}
	return false
}

/**
 * Your ParkingSystem object will be instantiated and called as such:
 * obj := Constructor(big, medium, small);
 * param_1 := obj.AddCar(carType);
 */
