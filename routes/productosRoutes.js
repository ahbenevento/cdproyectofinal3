import { Router } from "express";

const router = Router()

// Test
router.get('/', (req, res) => {
    res.render('index', {defaultLayout: false})
})

export default router