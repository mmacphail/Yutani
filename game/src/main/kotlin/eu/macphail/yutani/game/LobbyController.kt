package eu.macphail.yutani.game

import org.jooq.DSLContext
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.web.bind.annotation.RestController
import eu.macphail.yutani.game.schema.Tables
import org.jooq.Field
import org.jooq.impl.DSL.count
import org.springframework.web.bind.annotation.GetMapping

@RestController
class LobbyController {

    val maxGamePlayers = 8

    @Autowired
    lateinit var gameService: GameService

    @Autowired
    lateinit var dslContext: DSLContext

    data class Game(val id: String, val playerCount: Int, val maxPlayers: Int)

    @GetMapping("v1/lobby/games")
    fun getAvailableGames(): List<Game> {
        val userId = gameService.getUserId()

        val playerCount: Field<Any> = dslContext.selectCount()
                .from(Tables.GAME_PLAYER_LIST)
                .where(Tables.GAME_PLAYER_LIST.GAME_ID.eq(Tables.GAME.ID))
                .asField("playerCount")

        return dslContext.select(Tables.GAME.ID, playerCount)
                .from(Tables.GAME)
                .leftJoin(Tables.GAME_PLAYER_LIST)
                .on(Tables.GAME.ID.eq(Tables.GAME_PLAYER_LIST.GAME_ID))
                .where(Tables.GAME.COMPLETED.eq(false))
                .and(Tables.GAME_PLAYER_LIST.PLAYER_ID.eq(userId))
                .fetch { Game(it[0].toString(), it[1] as Int, maxGamePlayers) }
    }
}