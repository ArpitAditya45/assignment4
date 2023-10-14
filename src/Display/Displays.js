function Display({prop}){
    return(
        <>
        <tbody>
            <tr>
                <td>{prop.id}</td>
                <td><img src={prop.image} height={"20px"} width={"20px"}></img></td>
                <td>{prop.firstName}</td>
                <td>{prop.lastName}</td>
                <td>{prop.email}</td>
                <td>{prop.username}</td>
                <td>{prop.domain}</td>
                <td>{prop.ip}</td>
                <td>{prop.university}</td>
            </tr>
        </tbody>
        </>
    )

}
export default Display;