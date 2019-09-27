import React from 'react'

import { Dashboard, DashboardMenu, DashboardButton } from "../../components"

function HomePage() {
    return (
        <Dashboard>
            <DashboardMenu title="Jogo das trevas">
                <DashboardButton> Now, is game time</DashboardButton>
            </DashboardMenu>
        </Dashboard>
    );
}

export default HomePage
