db.createUser(
    {
        user: "anyata",
        pwd: "tamara",
        roles: [
            {
                role: "readWrite",
                db: "trinusadb"
            }
        ]
    }
)