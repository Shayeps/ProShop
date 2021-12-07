import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col } from 'react-bootstrap';
import Product from '../../components/Product';
import { listProducts } from '../../actions/productActions';
import Spinner from '../loader';
import Message from '../message';

const HomeScreen = () => {
    const dispatch = useDispatch();

    const { loading, error, products } = useSelector(state => state.productList);

    useEffect(() => {
        dispatch(listProducts());
    }, [dispatch]);

    return (
        <>
            <h1>Latest Products</h1>
            {
                loading ? <Spinner /> :
                    error ? <Message variant='danger' >{error}</Message> :
                        <Row>
                            {products.map(p => (
                                <Col key={p._id} sm={12} md={6} lg={4} xl={3}>
                                    <Product product={p} />
                                </Col>
                            ))}
                        </Row>
            }

        </>
    )
}

export default HomeScreen;
