// 刚开始的写法
// 先计算缺的 energy，再遍历 experience 数组
function minNumberOfHours(initialEnergy, initialExperience, energy, experience) {
    const costEnergy = energy.reduce((acc, val) => acc += val, 0)
    const needEnergy = initialEnergy > costEnergy ? 0 : costEnergy - initialEnergy + 1

    let needExperience = 0
    for (let i = 0; i < experience.length; i++) {
        if (initialExperience <= experience[i]) {
            needExperience += (experience[i] - initialExperience) + 1
            initialExperience = experience[i] + 1
        }
        initialExperience += experience[i]
    }
    return needEnergy + needExperience
}

// better
function minNumberOfHours(initialEnergy, initialExperience, energy, experience) {
    const n = energy.length
    let result = 0

    for (let i = 0; i < n; i++) {
        // 精力不够
        if (initialEnergy <= energy[i]) {
            result += (energy[i] + 1 - initialEnergy)
            initialEnergy = energy[i] + 1
        }
        // 经验不够
        if (initialExperience <= experience[i]) {
            result += (experience[i] + 1 - initialExperience)
            initialExperience = experience[i] + 1
        }
        // 打败对手后的数值变更
        initialExperience += experience[i]
        initialEnergy -= energy[i]
    }
    return result
}