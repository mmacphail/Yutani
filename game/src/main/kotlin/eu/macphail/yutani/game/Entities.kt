package eu.macphail.yutani.game

data class Player(val id: String, val locationId: String)

data class Game(val id: String, val locations: List<Location>, val players: List<Player>)

data class Location(val id: String, val name: String, val rumors: String, val discovered: Boolean)