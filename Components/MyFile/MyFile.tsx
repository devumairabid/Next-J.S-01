import { useState } from "react";
const StudentsList = () => {
    const [userName, setUserName] = useState("")
    const [rollNo, setRollNo] = useState("")
    const [bacthNo, setBatchNo] = useState("")
    const [students, setStudents] = useState([])

    const onClickHanlder = () => {
        if (!(userName && rollNo && bacthNo)) {
            alert("All params are required")
            return
        }
        console.log("on click handler called");
        const newStudent = {
            no: students.length + 1,
            name: userName,
            roll: rollNo,
            batch: bacthNo
        }

        setStudents([...students, newStudent])

        setUserName("")
        setRollNo("")
        setBatchNo("")
    }

    console.log("students", students);

    return (
        <div>
            Students List


            <table>
                <tr>
                    <th>No.</th>
                    <th>Name</th>
                    <th>Roll.</th>
                    <th>Batch#</th>
                </tr>

                {
                    students.map((item) => {
                        return (
                            <tr>
                                <td>{item.no}</td>
                                <td>{item.name}</td>
                                <td>{item.roll}</td>
                                <td>{item.batch}</td>
                            </tr>
                        )
                    })
                }
            </table>


            <label htmlFor="">Enter Student Name</label>
            <input value={userName} type="text" onChange={(e) => setUserName(e.target.value)} placeholder="Enter Student Name" />
            <br />
            <input value={rollNo} type="text" onChange={(e) => setRollNo(e.target.value)} placeholder="Enter student Roll No" />
            <br />
            <input value={bacthNo} type="text" onChange={(e) => setBatchNo(e.target.value)} placeholder="Enter Student Batch" />
            <br />
            <button onClick={onClickHanlder}>Add Student</button>


        </div>
    )
}

export default StudentsList




