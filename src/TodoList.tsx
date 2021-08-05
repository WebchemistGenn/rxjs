import React, { useEffect, useState } from "react";
import { interval } from "rxjs";
import { take, tap } from "rxjs/operators";

const obsv$ = interval(1000).pipe(tap(console.log), take(5));

function TodoList() {
  const [state, setState] = useState(0);

  useEffect(() => {
    const sub = obsv$.subscribe({
      next: (v) => setState((v) => v + 1),
      complete: () => console.log("done!"),
    });

    return () => sub.unsubscribe();
  }, []);

  return (
    <React.Fragment>
      <h3>Alarm Clock</h3>
      <div>{state}</div>
    </React.Fragment>
  );
}

export default TodoList;
