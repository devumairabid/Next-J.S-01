

import { useState } from "react"


const StudentsList = () => {
    const [userName, setUserName] = useState("")
    const [rollNo, setRollNo] = useState("")
    const [batch, setBatch] = useState("")
    const [students, setStudents] = useState([])

    const onClickHandler = () => {
        if (!(userName && rollNo && batch)) {
            alert("Required Correct data")

        }
        const newStudent = {
            no: students.length + 1,
            name: userName,
            rollNo: rollNo,
            batch: batch
        }
        setStudents([...students, newStudent])

        setUserName("")
        setRollNo("")
        setBatch("")
    }
    return (
        <div>
            <p>Students List</p>

            <table>
                <tr>
                    <th>No.</th>
                    <th>Name.</th>
                    <th>RollNo</th>
                    <th>Batch#</th>
                </tr>
                {
                    students.map((item) => {
                        return (
                            <tr>
                                <td>{item.no}</td>
                                <td>{item.name}</td>
                                <td>{item.rollNo}</td>
                                <td>{item.batch}</td>
                            </tr>)

                    })
                }
            </table>

            <label htmlFor="">Enter Your Students</label><br />
            <input type="text" value={userName} onChange={(e) => setUserName(e.target.value)}
                placeholder="Enter Name"/>
                <br />
                <input type="text" value={rollNo} onChange={(e) => setRollNo(e.target.value)}
                placeholder="Enter RollNo"/>
                <br />
                <input type="text" value={batch} onChange={(e) => setBatch(e.target.value)}
                placeholder="Enter Batch"/>
                <br />
                <button onClick={onClickHandler}>Add Students</button>













    
        </div>

    )
}
export default StudentsList



