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


Traveller.prototype.calculateTotalDistanceTravelled = function (totalDistance) {

  return this.journeys.reduce((journey) => {
    return (journey.distance + totalDistance)

  }, 0)
};

Traveller.prototype.getUniqueModesOfTransport = function () {

};


module.exports = Traveller;
