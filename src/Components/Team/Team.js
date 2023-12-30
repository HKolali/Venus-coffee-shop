import React from 'react'
import './Team.css'
import TeamItem from './TeamItem'
import HeaderSection from '../HeaderSection/HeaderSection'

function Team() {
    let teams = [
        {id: 1, image: "./images/team/our-team-1.jpg", title: "Kit Harington"},
        {id: 2, image: "./images/team/our-team-2.jpg", title: "Peter Dinklage"},
        {id: 3, image: "./images/team/our-team-3.jpg", title: "Sophie Turner"},
        {id: 4, image: "./images/team/our-team-4.jpg", title: "Jason Momoa"},
        {id: 5, image: "./images/team/our-team-5.jpg", title: "Emilia Clarke"},
        {id: 6, image: "./images/team/our-team-6.jpg", title: "Pedro Pascal"},
    ];

    return (
        <div className="team">
            <HeaderSection title='Our Team' />
            <div className="team__content">
                {teams.map((team) => {
                    return <TeamItem key={team.id} {...team} />
                })}
            </div>
        </div>
    );
}

export default Team;

