package eu.macphail.yutani.game

import org.slf4j.LoggerFactory
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PathVariable
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping("/v1/games/{gameId}/current")
class CurrentController {

    @Autowired
    lateinit var gameService: GameService

    @GetMapping("/player")
    fun getLocation(@PathVariable("gameId") gameId: String) : ResponseEntity<Player> {
        val game: Game? = gameService.getGame(gameId)
        return if (game == null) {
            ResponseEntity.notFound().build()
        } else {
            val player: Player? = gameService.getPlayer(game)
            if(player == null) {
                ResponseEntity.notFound().build()
            } else {
                ResponseEntity.ok(player)
            }
        }
    }

}
