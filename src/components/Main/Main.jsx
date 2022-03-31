import './Main.css'
import bilableLogo from "../../assets/img/svg/bilable-logo.svg";
import userProject from "../../assets/img/svg/user_project.png"
import amountOfReports from "../../assets/img/svg/amount-reports.png"
import financialInfo from "../../assets/img/svg/Financial Information.png"
import workPermissions from "../../assets/img/svg/work-permissions.png"

const Main = (props) => {
  return (
    <div class="page main-fonts">
      <div class="page__billable">
        <div class="page__billable-container _container">
          <div class="billable__over">
            <div class="billable__logo">
              <img src={bilableLogo} alt="Billabel Hours" />
            </div>
            <div class="billable__body">
              <div class="billable__title">
                Billabel Hours
              </div>
            </div>
          </div>
          <div class="billable__sub-title">
            Set an hourly rate to your contracts to mark them as billable. Get amount reports and <br />
            <a href="" class="billable__sub-title_link">generate invoices</a> to get paid.
          </div>
          <div class="billable__under-main">
            <div class="billable__btn">
              <a href="" class="billable__btn-text">
                Start 7 Days Free Trial
              </a>
            </div>
            <div class="billable__text">
              Use now, pay in 30 days. No credit card required
            </div>
          </div>
        </div>
      </div>
      <div class="users__project _container">
        <div class="users__project-img">
          <img src={userProject} alt="User Project" />
        </div>
      </div>

      <div class="amount__reports">
        <div class="amount__container _container">
          <div class="amount__body">
            <div class="amount__img">
              <img src={amountOfReports} alt="Amount Reports" />
            </div>
            <div class="amount__content">
              <div class="amount__title">
                Amount Reports
              </div>
              <div class="amount__texts">
                <div class="amount__text1">
                  If you’re working on an hourly rate, it will be a good idea to make your contracts
                  <br />
                  billable by adding an hourly rate in the contract's settings.
                </div>
                <div class="amount__text2">
                  By doing so your tracked time will be converted into an amount and you will be <br />
                  able
                  to see the reports both in hours and amounts. Amount reports show the <br /> billed
                  amount
                  of each member by day, week or month.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="financial__information">
        <div class="financial__information_container _container">
          <div class="financial__information_body">
            <div class="financial__information_content">
              <div class="financial__information_title">
                Permissions to Financial Information
              </div>
              <div class="financial__information_texts">
                <div class="financial__information_text1">
                  The owner is eligible to give visibility of the contract's rate to <br /> certain team
                  members. You can set up the rate visibility from the <br /> member’s list.
                </div>
                <div class="financial__information_text2">
                  Setting “Show hourly rate” will mean the member is able to see all <br /> financial
                  information related to his/her contract and role permission.
                </div>
                <div class="financial__information_text3">
                  If a member has no permission to financial information, he/she cannot view <br /> any
                  kind of financial information, as well as is not able to generate invoices.
                </div>
              </div>
            </div>
            <div class="financial__information_img">
              <img src={financialInfo} alt="Financial Information"
                class="financial__information_img__pic" />
            </div>
          </div>
        </div>
      </div>
      <div class="workspace__permessions">
        <div class="workspace__permessions_container _container">
          <div class="workspace__permessions_main">
            <div class="workspace__permessions_titles">
              <div class="workspace__permessions_title">
                Workspace Permissions
              </div>
              <div class="workspace__permessions_sub__title">
                Financial Permissions for Member Types
              </div>
            </div>
            <div class="workspace__permessions_content">
              <div class="workspace__permessions_items">
                <div class="workspace__permessions_item_1 workspace__permessions_item">

                  <div class="item__worker item__worker_1">
                    Owner
                  </div>
                  <div class="item__worker_text">
                    <a href="">Owner</a> is eligible to set up the access of financial <br />
                    information on a workspace level.
                  </div>

                </div>
                <div class="workspace__permessions_item_2  workspace__permessions_item">
                  <div class="item__worker item__worker_2">
                    Executive Manager
                  </div>
                </div>
                <div class="workspace__permessions_item_3 workspace__permessions_item">
                  <div class="item__worker item__worker_3">
                    Project Manager
                  </div>
                </div>
                <div class="workspace__permessions_item_4 workspace__permessions_item">
                  <div class="item__worker item__worker_4">
                    Employee
                  </div>
                </div>
                <div class="workspace__permessions_item_5 workspace__permessions_item">
                  <div class="item__worker item__worker_5">
                    Client
                  </div>
                </div>
              </div>
              <div class="workspace__permessions_img">
                <div class="workspace__permessions_img__pic">
                  <img src={workPermissions} alt="Workspace Permissions" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main;