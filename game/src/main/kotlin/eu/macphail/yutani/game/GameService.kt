package eu.macphail.yutani.game

import org.slf4j.LoggerFactory
import org.springframework.security.core.context.SecurityContextHolder
import org.springframework.security.oauth2.jwt.Jwt
import org.springframework.stereotype.Service
import java.util.concurrent.ConcurrentHashMap
import javax.annotation.PostConstruct

@Service
class GameService {

    private val logger = LoggerFactory.getLogger(GameService::class.java)

    private val games = ConcurrentHashMap<String, Game>()

    @PostConstruct
    fun init() {
        val locations = listOf(
                Location("port", "Port",
                        """The old port comes back to life after having been neglected for 10 years.
                      |The harbor master's office serves as your headquarters. Here at least you are safe."""
                                .trimMargin(),
                        true),
                Location("mines", "Mines",
                        """The old mines were suddenly left behind. It's up to you to take back control of the ore production if you want to upgrade your arsenal.""".trimMargin(),
                        true),
                Location("arena", "Arena",
                        """This huge arena is not abandoned. You heard talks of slavers enjoying themselves with to-the-death slaves battle. Maybe you can help yourself by helping them defeat their masters.""".trimMargin(),
                        true),
                Location("caves", "Caves",
                        """The region is dominated by a mountain. Locals told you that it was full of caves. Who know what you might find in these caves?""".trimMargin(),
                        false)
        )

        val consolePlayer = Player("cJ8t3ezRpON7arPet2pCAp9ywGrRc5vJ@clients", locationId = locations[0].id)
        val malkyPlayer = Player("github|9349702", locationId = locations[0].id)
        games["1"] = Game("1", locations, listOf(consolePlayer, malkyPlayer))
    }

    fun getGame(id: String): Game? = games[id]

    fun getPlayer(game: Game): Player? {
        return game.players.find { it.id == getUserId() }
    }

    fun getUserId(): String {
        val authentication = SecurityContextHolder.getContext().authentication
        val jwtPrincipal: Jwt = authentication.principal as Jwt
        return jwtPrincipal.subject
    }
}
