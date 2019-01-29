// Code your solution in this file!

const logDriverNames = ((drivers) => {
  let driversCopy = [...drivers]
  driversCopy.forEach((driver) => {
    console.log(driver.name)
  })
})

const logDriversByHometown = ((drivers, hometown) => {
  const filteredDrivers = drivers.filter((driver) => {
      return driver.hometown === hometown
  })
  filteredDrivers.forEach((driver) => {
    console.log(driver.name)
  })
})

// const revenueSorter = function (rev1, rev2) {
//   return rev1 - rev2;
// };

const driversByRevenue = ((drivers) => {
  let driversCopy = [...drivers]
  sortedDrivers = driversCopy.sort((a, b) => {
    return a.revenue - b.revenue
  })
  return sortedDrivers
})

// function(a,b) {
//         return ((a.make < b.make) ? -1 : ((a.make > b.make) ? 1 : 0));
//     }

const driversByName = ((drivers) => {
  let driversCopy = [...drivers]
  sortedDrivers = driversCopy.sort((a, b) => {
    return ((a.name < b.name) ? -1 : ((a.name > b.name) ? 1 : 0))
  })
  return sortedDrivers
})

const totalRevenue = function (drivers) {
  total = drivers.reduce(function (a, b) {
    return {revenue: a.revenue + b.revenue};
  });
  return total['revenue']
};


const averageRevenue = function (drivers) {
  let totalRevenue = 0;

  drivers.forEach(function (driver) {
    totalRevenue += driver.revenue;
  });
  let average = totalRevenue / (drivers.length)
  return average
};
