
import styles from './DoList.module.css'
import useStoreCount from '../Store/Store1';
function DoList(){
//initial
    const {counts,Add,Delete}= useStoreCount()

    function Addhandler() {
        const inp = document.getElementById('input1').value;
        document.getElementById('input1').value = '';
        

        if (inp.trim() === '') {
            alert('fill the input');
            return;
        }

        Add(inp);
    }

    function Deletehandler(index){
        Delete(index)
    }

    return(
        <>
        <div className={styles.div1}>
            <div className={styles.div2}>
                <p className={styles.head}>To Do App</p>
                <div className={styles.div3}>
                <form>
                            <div className={styles.form}>
                            <input type="text" className={styles.inp} id='input1' />
                             <div className={styles.lab}>enter name</div>
                            </div>
                            <button type="button" className={styles.btn1} onClick={Addhandler}>SAVE</button>
                            <button type="button" className={styles.btn2}>GET TEXTS</button>
                </form>

                 </div>
                 <div className={styles.div4}>
                    <table className={styles.table1}>
                        <thead>
                        <tr className={styles.tr1}>
                            <th>No.</th>
                            <th>Todo item</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                        </thead>
                        <tbody>
                                {counts.map((count, index) => (
                                    <tr key={index} className={styles.tr1}>
                                        <td>{index + 1}</td>
                                        <td>{count}</td>
                                        <td>In progress</td>
                                        <td>
                                            <button className={styles.btn3} onClick={()=>Deletehandler (index)}>DELETE</button><br />
                                            <button className={styles.btn4}>FINISHED</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                </table>
                 </div>

            </div>

        </div>
        </>

    )
}
export default DoList