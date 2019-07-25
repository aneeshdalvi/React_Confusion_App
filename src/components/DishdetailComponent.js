import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';



class DishDetail extends Component {
    constructor(props) {
        super(props);

        this.state = {
        }
    }

    onDishSelect(dish) {
        this.setState({ selectedDish: dish});
    }

    renderDish(dish) {
        if (dish != null)
            return(
                <Card>
                    <CardImg top src={this.props.selectedDish.image} alt={this.props.selectedDish.name} />
                    <CardBody>
                      <CardTitle>{this.props.selectedDish.name}</CardTitle>
                      <CardText>{this.props.selectedDish.description}</CardText>
                    </CardBody>
                </Card>
            );
        else
            return(
                <div></div>
            );
    }


    render() { 

        // // for comments
        const renderComments = (dish) => {
            if (dish != null){
                console.log(dish.comments);
                const comments = dish.comments.map((comment) => {
                    return (
                        <div  key={comment.id}>
                            <ul className = "list-unstyled">
                                <li>{comment.comment}</li>
                                <li>-- {comment.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day:'2-digit'}).format(new Date(Date.parse(comment.date)))}</li>
                            </ul>
                        </div>
                      );
                  });
                  return (
                    <div>
                        <h4>Comments</h4>
                        {comments}
                    </div>
                );
            }else{
                return (
                    <div></div>
                );
            }     
        }
        
        return (
            <div>
                <div className="row">
                    <div  className="col-12 col-md-5 m-1">
                        {this.renderDish(this.props.selectedDish)}
                    </div>
                    <div  className="col-12 col-md-5 m-1">
                        {renderComments(this.props.selectedDish)}
                    </div>
                </div>
            </div>
        );
    }

}

export default DishDetail;