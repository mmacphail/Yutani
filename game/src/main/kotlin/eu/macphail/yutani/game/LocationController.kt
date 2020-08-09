package eu.macphail.yutani.game

import org.springframework.beans.factory.annotation.Autowired
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PathVariable
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping("/v1/games/{gameId}/locations")
class LocationController {

    @Autowired
    lateinit var gameService: GameService

    @GetMapping
    fun getAllLocations(@PathVariable("gameId") gameId: String): ResponseEntity<List<Location>> {
        val game: Game? = gameService.getGame(gameId)
        return if (game == null) {
            ResponseEntity.notFound().build()
        } else {
            ResponseEntity.ok(game.locations)
        }
    }
}