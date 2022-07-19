const db = require('../db')

class WoodBoardsController {
    async getWoodBoards(req, res) {
        let { limit, page, ordering, desc, filtredBy, comparison, value} = req.query
        page = page || 1
        limit = limit || 5
        ordering = ordering || "date"
        desc ? desc = "DESC" : desc = '' 
        console.log(ordering)
        let offset = page * limit - limit
        let tableData
        console.log(filtredBy, comparison, value)
        if(filtredBy && comparison && value) {
            if(comparison == "LIKE") {
                tableData = await db.query(`SELECT * FROM woodboard WHERE ` + filtredBy + " " + comparison + " '%" + value +  `%' ORDER BY ` + ordering + " " + desc + ` OFFSET ($1) LIMIT ($2);`, [offset, limit])
            }
            else{
                tableData = await db.query(`SELECT * FROM woodboard WHERE ` + filtredBy + " " + comparison + " " + value +  ` ORDER BY ` + ordering + " " + desc + ` OFFSET ($1) LIMIT ($2);`, [offset, limit])
            }
        }
        else{ 
            tableData = await db.query(`SELECT * FROM woodboard ORDER BY ` + ordering + " " + desc + ` OFFSET ($1) LIMIT ($2);`, [offset, limit])
            }
            
        

        return res.json(tableData.rows)


    }
}

module.exports = new WoodBoardsController()