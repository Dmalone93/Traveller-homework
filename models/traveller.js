const Traveller = function(journeys) {
  this.journeys = journeys;
};

// Cinema.prototype.checkRunTime = function(length){
//   return this.films.some((film) => {
//     return film.length >= length
//   })
// }

// Cinema.prototype.findByGenre = function(genre){
//   return this.films.filter((film) => {
//     if (film.genre === genre) {
//       return film
//     }
//   })
// }

Traveller.prototype.getJourneyStartLocations = function(journeys) {
  return this.journeys.map((journey) => {
    return journey.startLocation
  })
};

Traveller.prototype.getJourneyEndLocations = function (journeys) {
  return this.journeys.map((journey) => {
    return journey.endLocation
  })
};

Traveller.prototype.getJourneysByTransport = function (transport) {
  return this.journeys.filter((journey) => {
    return (journey.transport === transport)
  })
};



Traveller.prototype.getJourneysByMinDistance = function (minDistance) {

  return this.journeys.filter((journey) => {
    return (journey.distance >= minDistance)
  })
}


Traveller.prototype.calculateTotalDistanceTravelled = function () {

  return this.journeys.reduce((totalDistance, journey) => {
    return totalDistance + journey.distance
  }, 0)
};
// array.map(item => item.age)
//   .filter((value, index, self) => self.indexOf(value) === index)
Traveller.prototype.getUniqueModesOfTransport = function () {
  result = this.journeys.map((journey) => {
    return journey.transport
  }).filter((transport, index, result) => {
    result.indexOf(transport) === index;
  })
}



module.exports = Traveller;
