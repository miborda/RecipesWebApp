import React from 'react';
import Table from 'react-bootstrap/Table';
import recipeService from '../Services/RecipesService';

class Grid extends React.Component {

    render() {
        let recipes = recipeService.getAll().map((res, index) => {
            return (
                <tr key={index}>
                    <td>{res.id}</td>
                    <td>{res.name}</td>
                    <td></td>
                </tr>
            );
        });

        return (
            <Table striped bordered hover variant="dark" responsive="sm">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Detail</th>
                    </tr>
                </thead>
                <tbody>
                    {recipes}
                </tbody>
            </Table>
        );
    }
}
export default Grid;