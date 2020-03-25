import{BrowserRouter as Router,Route,Link} from 'react-router-dom';
import React, { Component } from 'react'
import 'antd/dist/antd.css';
import './index.css';
import logo from '../src/image/logo192.png';
import { Layout, Menu, Breadcrumb } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined,CalculatorOutlined ,CaretRightOutlined } from '@ant-design/icons';
//Root
import Bisection from './page/root of equation/bisection';
import False from './page/root of equation/falseposition';
import Newton from './page/root of equation/newtonraphson';
import OnePoint from './page/root of equation/onepoint';
import Secant from './page/root of equation/secant';
//Linear
import Cramer from './page/linear algaba/cramer';
import GaussJordan from './page/linear algaba/gaussjordan';
import GaussSeidel from './page/linear algaba/gaussseidel';
import Jacobi from './page/linear algaba/jacobi';
import Conjugate from './page/linear algaba/conjugategadient';
import GaussElimination from './page/linear algaba/guasselimination';
import LU from './page/linear algaba/lu';
import Cholesky from './page/linear algaba/cholesky';
//Interpolation
import Newtondivided from './page/interpolation technique/newtondivided';
import Lagrange from './page/interpolation technique/lagrange';
import Spline from './page/interpolation technique/spline';
//Regression
import Linear from './page/regression/linear';
import Polynomial from './page/regression/polynomial';
import MultipleLinear from './page/regression/multiplelinear';
//Intergration
import Trapzoidal from './page/integration/trapzoidal';
import CompositeTrapzoidal from './page/integration/compositetrapzoidal';
import Simpson from './page/integration/simpson';
import CompositeSimpson from './page/integration/compositesimpson';
//Differentiation
import Differentiation from './page/differentiation/differentiation';


const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {

    }
  }

  render() {
    return (
      <Router>
      <Layout>                                    
        <Header style={{ background: "#1488C5", color: "white" }} className="header">
          <div>
          <img style={{float:'left'}} src={logo} width={50} /><p style={{ fontSize:'24px' }}>&nbsp;&nbsp;&nbsp;Numerical Method</p>
          </div>
        </Header>

        <Content style={{ padding: '0 50px' }}>
          <Layout className="site-layout-background" style={{ padding: '24px 0' }}>
            <Sider className="site-layout-background" width={270} >
              <Menu
                mode="inline"
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                style={{ height: '100%' }}
              >
                <SubMenu
                  key="sub1"
                  title={
                    <span>
                      <CalculatorOutlined />
                      Root of Equation
                </span>
                  }
                >
                  <Menu.Item key="1"><CaretRightOutlined />Bisection <Link to = "/bisection"/>  </Menu.Item>
                  <Menu.Item key="2"><CaretRightOutlined />False Position <Link to = "/false"/>  </Menu.Item>
                  <Menu.Item key="3"><CaretRightOutlined />One Point <Link to = "/onepoint"/>  </Menu.Item>
                  <Menu.Item key="4"><CaretRightOutlined />Newton Raphson <Link to = "/newton"/>  </Menu.Item>
                  <Menu.Item key="5"><CaretRightOutlined />Secant <Link to = "/secant"/>  </Menu.Item>
                </SubMenu>
                <SubMenu
                  key="sub2"
                  title={
                    <span>
                      <CalculatorOutlined />
                      Linear Algaba
                </span>
                  }
                >
                  <Menu.Item key="6"><CaretRightOutlined />Cramer <Link to = "/cramer"/> </Menu.Item>
                  <Menu.Item key="7"><CaretRightOutlined />Gauss Jordan <Link to = "/gaussjordan"/> </Menu.Item>
                  <Menu.Item key="8"><CaretRightOutlined />Gauss Seidel <Link to = "/gaussseidel"/> </Menu.Item>
                  <Menu.Item key="9"><CaretRightOutlined />Jacobi <Link to = "/jacobi"/> </Menu.Item>
                  <Menu.Item key="10"><CaretRightOutlined />Conjugate Gadient <Link to = "/conjugategadient"/> </Menu.Item>
                  <Menu.Item key="11"><CaretRightOutlined />Gauss Elimination <Link to = "/gausselimination"/> </Menu.Item>
                  <Menu.Item key="12"><CaretRightOutlined />LU <Link to = "/lu"/> </Menu.Item>
                  <Menu.Item key="13"><CaretRightOutlined />Cholesky <Link to = "/cholesky"/> </Menu.Item>
                </SubMenu>
                
                <SubMenu
                  key="sub3"
                  title={
                    <span>
                      <CalculatorOutlined />
                      Interpolation Technique
                </span>
                  }
                >
                  <Menu.Item key="14"><CaretRightOutlined />Newton's Divided-Differnce<Link to = "/newtondivided"/> </Menu.Item>
                  <Menu.Item key="15"><CaretRightOutlined />Lagrange <Link to = "/lagrange"/> </Menu.Item>
                  <Menu.Item key="16"><CaretRightOutlined />Spline <Link to = "/spline"/> </Menu.Item>
                </SubMenu>

                <SubMenu
                  key="sub4"
                  title={
                    <span>
                      <CalculatorOutlined />
                      Regression
                </span>
                  }
                >
                  <Menu.Item key="17"><CaretRightOutlined />Linear <Link to = "/linear"/> </Menu.Item>
                  <Menu.Item key="18"><CaretRightOutlined />Polynomial <Link to = "/polynomial"/> </Menu.Item>
                  <Menu.Item key="19"><CaretRightOutlined />Multiple Linear <Link to = "/multiplelinear"/> </Menu.Item>
                </SubMenu>

                <SubMenu
                  key="sub5"
                  title={
                    <span>
                      <CalculatorOutlined />
                      Intergration
                </span>
                  }
                >
                  <Menu.Item key="20"><CaretRightOutlined />Trapzoidal <Link to = "/trapzoidal"/> </Menu.Item>
                  <Menu.Item key="21"><CaretRightOutlined />Composite Trapzoidal <Link to = "/compositetrapzoidal"/> </Menu.Item>
                  <Menu.Item key="22"><CaretRightOutlined />Simpson <Link to = "/simpson"/> </Menu.Item>
                  <Menu.Item key="23"><CaretRightOutlined />Composite Simpson <Link to = "/compositesimpson"/> </Menu.Item>

                </SubMenu>

                <SubMenu
                  key="sub6"
                  title={
                    <span>
                      <CalculatorOutlined />
                      Differentiation
                </span>
                  }
                >
                  <Menu.Item key="24"><CaretRightOutlined />Differentiation <Link to = "/differentiation"/> </Menu.Item>

                </SubMenu>


              </Menu>
            </Sider>
            <Content style={{ background: "#FFB947", color: "black" , padding: '0 24px', minHeight: 750 }}>
            <Route path = "/bisection" component = {Bisection} />
            <Route path = "/false" component = {False}/>
            <Route path = "/newton" component = {Newton}/>
            <Route path = "/onepoint" component = {OnePoint}/>
            <Route path = "/secant" component = {Secant}/>
            <Route path = "/cramer" component = {Cramer}/>
            <Route path = "/gaussjordan" component = {GaussJordan}/>
            <Route path = "/gaussseidel" component = {GaussSeidel}/>
            <Route path = "/jacobi" component = {Jacobi}/>
            <Route path = "/conjugategadient" component = {Conjugate}/>
            <Route path = "/gausselimination" component = {GaussElimination}/>   
            <Route path = "/lu" component = {LU}/> 
            <Route path = "/cholesky" component = {Cholesky}/> 
            <Route path = "/newtondivided" component = {Newtondivided}/>  
            <Route path = "/lagrange" component = {Lagrange}/> 
            <Route path = "/spline" component = {Spline}/>  
            <Route path = "/linear" component = {Linear}/>  
            <Route path = "/polynomial" component = {Polynomial}/>  
            <Route path = "/multiplelinear" component = {MultipleLinear}/>      
            <Route path = "/trapzoidal" component = {Trapzoidal}/>    
            <Route path = "/compositetrapzoidal" component = {CompositeTrapzoidal}/> 
            <Route path = "/simpson" component = {Simpson}/> 
            <Route path = "/compositesimpson" component = {CompositeSimpson}/> 
            <Route path = "/differentiation" component = {Differentiation}/> 
            </Content>
          </Layout>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
      </Layout>
    </Router>
    )
  }
}

export default App
