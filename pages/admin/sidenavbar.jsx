import React from 'react'
import { NavLink } from 'react-router-dom'

const Sidenavbar = () => {
    return (
        <div className='w-[16%] p-8'>
            <ul className='leading-12 space-y-4'>
                {[
                    { to: '/', label: 'Dashboard' },
                    { to: '/analytics', label: 'Analytics' },
                    { to: '/connect', label: 'Connect' },
                    { to: '/dealroom', label: 'Dealroom' },
                    { to: '/profile', label: 'Profile' },
                    { to: '/settings', label: 'Settings' }
                ].map((item) => (
                    <li key={item.to}>
                        <NavLink 
                            to={item.to}
                            className={({ isActive }) =>
                                `text-[18px] hover:underline ${isActive ? 'text-white' : ''}`
                            }
                            style={({ isActive }) => ({
                                color: isActive ? 'white' : '#646464'
                            })}
                        >
                            {item.label}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Sidenavbar
