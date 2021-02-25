package probelm0735

// 两种种情况不会碰撞
// 1. prev < 0
// 2. prev > 0 && cur > 0
// 已知条件
// 2 <= asteroids.length <= 104
// asteroids[i] != 0
func asteroidCollision(asteroids []int) []int {
	for i := 1; i < len(asteroids); {
		if i < 1 {
			i++
			continue
		}
		if asteroids[i-1] < 0 || (asteroids[i-1] > 0 && asteroids[i] > 0) {
			i++
		} else {
			if abs(asteroids[i-1]) > abs(asteroids[i]) {
				asteroids = append(asteroids[:i], asteroids[i+1:]...)
			} else if abs(asteroids[i-1]) < abs(asteroids[i]) {
				asteroids = append(asteroids[:i-1], asteroids[i:]...)
				i--
			} else {
				asteroids = append(asteroids[:i], asteroids[i+1:]...)
				asteroids = append(asteroids[:i-1], asteroids[i:]...)
				i--
			}
		}
	}
	return asteroids
}

func abs(a int) int {
	if a < 0 {
		return -a
	}
	return a
}