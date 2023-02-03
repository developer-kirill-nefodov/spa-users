import React from 'react';
import {Button, Card, Pagination} from 'antd';

const MobileListUsers = ({data, total, current, pageSize, onChange, editUser}) => {
  return (
    <div className='wrapper-mobile-carts'>
      <Card loading={!total}>
        {data.map((value, key) => (
          <Card
            title={value.name}
            size='small'
            key={'Item_' + key}
            extra={
              <Button type='link' onClick={() => editUser(value.id)}>
                Edit
              </Button>
            }
          >
            <div style={{color: value.status === 'active' ? 'green' : 'red'}}>
              <p>Email: {value.email}</p>
              <p>Gender: {value.gender}</p>
              <p>Status: {value.status}</p>
            </div>
          </Card>
        ))}
        <Pagination
          style={{marginTop: 10}}
          onChange={onChange}
          pageSize={pageSize}
          current={current}
          total={total}
        />
      </Card>

    </div>
  );

  // return (
  //   <div margin="0.5em">
  //     <Card sx={{padding: 1}}>
  //       {data.map(record => (
  //         <RecordContextProvider key={record.id} value={record}>
  //           <Card sx={{margin: '0.5rem 0', ...loanListStylesMobile(!paranoid)(record)}}>
  //             <CardHeader
  //               title={<TitleMobileCard {...record}/>}
  //               action={paranoid ? (
  //                 <EditButton/>
  //               ) : (
  //                 <Box display='flex' flexDirection='column'>
  //                   <RestoreButton resource='loans'/>
  //                   <ConfirmDeleteButton
  //                     resource='loans/destroy'
  //                     confirmContent='Are you sure you want to delete? Data cannot be recovered'
  //                   />
  //                 </Box>
  //               )}
  //             />
  //             <CardContent sx={{pt: 0}}>
  //               <Typography variant="body2" fontSize='12px'>
  //                 <span style={{fontWeight: 'bold'}}>Profit: </span>
  //                 <ColoredNumberField source='profit'/>
  //               </Typography>
  //               <Typography variant="body2" fontSize='12px'>
  //                 <span style={{fontWeight: 'bold'}}>Return total: </span>
  //                 <ColoredNumberField source='return_total'/>
  //               </Typography>
  //               <Typography variant="body2" fontSize='12px'>
  //                 <span style={{fontWeight: 'bold'}}>Status: </span>
  //                 <TextField source="status"/>
  //               </Typography>
  //             </CardContent>
  //           </Card>
  //         </RecordContextProvider>
  //       ))}
  //     </Card>
  //   </div>
  // )

};

export default MobileListUsers;