import React from "react";

const initialItems = [
  { id: 1, title: 'アイテム1', content: 'アイテム1', category: 'NoStatus', assignee: '未割り当て', position: 10, category_id: 1},
  { id: 2, title: 'アイテム2', content: 'アイテム2', category: 'NoStatus', assignee: '未割り当て', position: 20, category_id: 1 },
  { id: 3, title: 'アイテム3', content: 'アイテム3', category: 'NoStatus', assignee: 'らんてくん', position: 30, category_id: 1 },
  { id: 4, title: 'アイテム4', content: 'アイテム4', category: 'NoStatus', assignee: '未割り当て', position: 40, category_id: 1 },
  { id: 5, title: 'アイテム5', content: 'アイテム5', category: 'NoStatus', assignee: 'らんくん', position: 50, category_id: 1 },
  { id: 6, title: 'アイテム6', content: 'アイテム6', category: 'NoStatus', assignee: '未割り当て', position: 60, category_id: 1 },
  { id: 7, title: 'アイテム7', content: 'アイテム7', category: 'NoStatus', assignee: '未割り当て', position: 70, category_id: 1 },
  { id: 8, title: 'アイテム8', content: 'アイテム8', category: 'NoStatus', assignee: '未割り当て', position: 80, category_id: 1 },
  { id: 9, title: 'アイテム9', content: 'アイテム9', category: 'InProgress', assignee: '未割り当て', position: 10, category_id: 3 },
  { id: 10, title: 'アイテム10', content: 'アイテム10', category: 'Done', assignee: '未割り当て', position: 10, category_id: 4 }
];

const initialCategories = [
  { id: 1, name: 'NoStatus'},
  { id: 2, name: 'Backlog'},
  { id: 3, name: 'InProgress'},
  { id: 4, name: 'Done'}
];

export default function Todos() {
  return (
    <div>
      <div>
        <div>
          <div>カテゴリータイトルtesttesttest
          </div>
        </div>
        <div>
          <div>
            <div>
              <div>
                <div>アイテムタイトル</div>
              </div>
            </div>
          </div>          
        </div>
      </div>
    </div>
  );
}

if (error.valuse) {
  console.log(error.value.status);
  throw createError({
    statusCode: error.value.status || 500,
    statusMessage: error.value.statusText || "hgoe",
  })  
}