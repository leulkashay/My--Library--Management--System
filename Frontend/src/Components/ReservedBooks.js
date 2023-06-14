import React from 'react'
import './ReservedBooks.css'

function ReservedBooks() {
    return (
        <div className='reservedbooks-container'>
            <h className='reservedbooks-title'>Books On Hold</h>
            <table className='reservedbooks-table'>
                <tr>
                    <th>Name</th>
                    <th>Book</th>
                    <th>Date</th>
                </tr>
                <tr>
                    <td>Pranav</td>
                    <td>Rich Dad Poor Dad</td>
                    <td>12/7/2021</td>
                </tr>
            </table>
        </div>
    )
}

export default ReservedBooks
