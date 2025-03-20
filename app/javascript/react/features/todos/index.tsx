import React, { useState } from "react";
import { Item, Category } from "./types";

// 初期アイテムモックリストの定義
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
// 初期カテゴリーモックリストの定義
const initialCategories = [
  { id: 1, name: 'NoStatus'},
  { id: 2, name: 'Backlog'},
  { id: 3, name: 'InProgress'},
  { id: 4, name: 'Done'}
];

export default function Todos() {
  const [items, setItems] = useState<Item[]>(initialItems);
  const [categories, setCategories] = useState<Category[]>(initialCategories)

  const filteredItems = (categoryId: number) => {
    return items
      .filter(
        (item) =>
          item.category_id === categoryId
      ).sort((a, b) => a.position - b.position)
  }

  return (
    <div className="my-4 flex max-h-[90%] overflow-x-auto">
      {categories.map((category) => (
        <div
          key={category.id}
          className="ml-4 max-h-[100%] flex-none self-start overflow-y-auto rounded border border-gray-200 bg-base-300"
        >
          <div className="sticky top-0 z-10 flex rounded bg-base-300 p-2">
            <div className="flex-1">{category.name}</div>
          </div>
          <div
            className="min-h-[100px] w-[350px]"
          >
            {filteredItems(category.id).map((item) => (
              <div key={item.id}>
                <div
                  className="m-2 rounded border border-gray-200 bg-base-100 hover:bg-base-200"
                >
                  <div className="relative flex min-h-[80px] flex-col">
                    <div className="link m-2 mr-10 break-words text-sm">{item.title}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
