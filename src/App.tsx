import { Admin, Resource} from "react-admin";
import { Layout } from "./Layout";
import { dataProvider } from "./dataProvider";

import ProductList from "./pages/products/product-list";
import ProductShow from "./pages/products/product-show";
import ProductEdit from "./pages/products/product-edit";
import ProductCreate from "./pages/products/product-create";

import CategoryList from "./pages/categories/categorie-list";
import CategoryShow from "./pages/categories/categorie-show";
import CategoryEdit from "./pages/categories/categorie-edit";

import AttributeList from "./pages/attributes/attribute-list";
import AttributeShow from "./pages/attributes/attribute-show";
import AttributeEdit from "./pages/attributes/attribute-edit";



export const App = () => (
  <Admin layout={Layout} dataProvider={dataProvider}>
    <Resource name="products" list={ProductList} edit={ProductEdit} show={ProductShow} create={ProductCreate} />
    <Resource name="categories" list={CategoryList} edit={CategoryEdit} show={CategoryShow}/>
    <Resource name="attributes" list={AttributeList} edit={AttributeEdit} show={AttributeShow}/>
  </Admin>
);
