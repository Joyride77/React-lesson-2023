import { useEffect, useState } from 'react';
import { useParams, useNavigate } from "react-router-dom"

const CategoryEditForm = () => {
    const { id } = useParams();
    const navigate = useNavigate()
    const URL = 'http://localhost:8080/category';


    const [category, setCategory] = useState({
        name: "Test",
    });

    async function fetchCategory() {
        const options = {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                categoryId: id,
            })
        }
        const FETCHED_DATA = await fetch(URL, options)
        const FETCHED_JSON = await FETCHED_DATA.json();
        if (FETCHED_JSON.status === "success") {
            setCategory(FETCHED_JSON.data)
        }
    }
    useEffect(() => {
        fetchCategory();
    }, [])

    async function handleEditSubmit(e) {
        e.preventDefault();

        const options = {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                categoryId: id,
                categoryName: e.target.categoryName.value,
                isEdit: true
            })
        }

        const FETCHED_DATA = await fetch(URL, options)
        const FETCHED_JSON = await FETCHED_DATA.json();
        if (FETCHED_JSON.status === "success") {
            navigate('/category/list')
        }
    }

    function handleInputChange(e) {
        setCategory(e.target.value);
    }
    return (
        <div>
            <h1>Category Edit Form</h1>
            <form onSubmit={handleEditSubmit}>
                <input name='categoryName' value={category.name} onChange={handleInputChange} />
                <br />
                <button>Edit Saved</button>
            </form>
        </div>
    )
}

export default CategoryEditForm