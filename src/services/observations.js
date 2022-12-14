import axios from 'axios'

// Base url for fetching iNat observations
const BASE_URL = 'http://localhost:3001/api/taxa'

const searchForTaxon = async (query) => {
  const url = `${BASE_URL}?q=${query}`
  const res = await axios.get(url)
  return res.data
}

const searchForDescendants = async (id, page) => {
  const url = `${BASE_URL}/descendants?id=${id}&page=${page}`
  const res = await axios.get(url)
  return res.data
}

const fetchTaxaById = async (id) => {
  const url = `https://api.inaturalist.org/v1/taxa/${id}`
  const res = await axios.get(url)
  return res.data.results[0]
}

/*
const searchForSpecies = async (query, page) => {
  // First search for a taxon
  let url = `${BASE_URL}?q=${query}`
  let response = await axios.get(url)

  // Then, find that taxon's descendants
  url = `${BASE_URL}/descendants?id=${response.data.id}&page=${page}`
  response = await axios.get(url)

  return response.data
}
*/

// searchForTaxon('sharks')
// searchForDescendants('47273', 1)
// searchForSpecies('sharks', 1)

const observationsService = {
  searchForTaxon,
  searchForDescendants,
  fetchTaxaById
  // searchForSpecies
}

export default observationsService