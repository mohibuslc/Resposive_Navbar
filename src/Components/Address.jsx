


const Address = ({ data }) => {
    const { Name } = data;
    return (
        <nav >
            <ul className="mr-5 md:flex">
                <li >{Name}   </li>               
               
            </ul>
        </nav>
    );
};

export default Address;
