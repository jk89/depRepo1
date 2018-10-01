import { Express } from "express";

export function extendApp(app: any) {
    app.get("/depRepo1", (req: any, res: any) => {
        res.send("depRepo1");
    });
}