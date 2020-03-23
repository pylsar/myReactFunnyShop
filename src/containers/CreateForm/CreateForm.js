import React from 'react'

class CreateForm extends React.Component {

    state={
        product: {}
    }

    render(){
        return(
            <div>
                <form>
                    <div>
                        <label htmlFor="title">Заголовок</label>
                        <input id="title" type="text" placeholder="title" required/>
                    </div>
                    <div>
                        <label htmlFor="longDescr">Описание</label>
                        <textarea id="longDescr" type="text" placeholder="description" required/>
                    </div>
                    <div>
                        <label htmlFor="price">Цена</label>
                        <input id="price" type="text" placeholder="price" required/>
                    </div>
                    <div>
                        <label htmlFor="img">Картинка</label>
                        <input id="img" type="text" placeholder="картинку вложить в папку ./src/assets/img"/>
                    </div>
                    <div>
                        <label htmlFor="quantity">Остаток</label>
                        <input id="quantity" type="number" placeholder="quantity" step="1" min="0" required/>
                    </div>
                    <button>Добавить</button>
                </form>
            </div>
        )
    }
}

export default CreateForm