---
title: "문제로 풀어보는 알고리즘 00장"
date: 2022-03-31 22:36:09 +0900
categories: [Problem Solving, 문제로 풀어보는 알고리즘]
tags: [ps, book]
---

# 최댓값과 최솟값

## 두 수를 받고 최대/최소를 반환하는 함수

```c++
int max(int x, int y)
{
    if (x > y)
    {
        return x;
    }
    return y;
}

int min(int x, int y)
{
    if (x < y)
    {
        return x;
    }
    return y;
}
```

### 매크로 함수 작성

> **매크로 함수란?** #define으로 함수를 미리 정의해두는 방법을 말한다. 주로 짧고 단순한, 많이 쓰이고 직관적인 구조를 취하는 함수는 매크로 함수로 정의한다.
{: .prompt-info }

> **삼항 연산자에 대하여** `if (cond) A else B`와 같은 코드는 삼항 연산자로 간단하게 적을 수 있다. : `(cond?A:B)`
{: .prompt-info }

```c++
#define max(x, y) ((x)>(y)?x:y)
#define min(x, y) ((x)<(y)?x:y)
```

> 단, 매크로 함수는 **그저 글자를 바꿔치기 하는 역할**을 하기에 실수할 수 있는 여지가 매우 높다. 매크로 함수를 이용해야하는 특별한 이유가 없다면 보통의 함수로 코드를 작성하자.
{: .prompt-warning }


## 세 수를 받고 최대/최소를 반환하는 함수

```c++
int max(int x, int y, int z)
{
    if (x > y)
    {
        if (x > z)
        {
            return x;
        }
        return z;
    }
    else
    {
        if (y > z)
        {
            return y;
        }
        return z;
    }
}

int max(int x, int y, int z)
{
    if (x < y)
    {
        if (x < z)
        {
            return x;
        }
        return z;
    }
    else
    {
        if (y < z)
        {
            return y;
        }
        return z;
    }
}
```

## 배열의 최대값을 구하는 함수

> 배열을 인자로 전달할 때에는, 포인터 형식으로 준다. 단, 이럴 경우 배열의 길이를 알 수 없기에 배열의 길이 역시 함수의 인자로 전달해야 한다.
{: .prompt-warning }

> 배열의 길이는 어떻게 계산할 수 있을까? 많은 방법이 있지만, HARD한 코드로는 `sizeof arr / sizeof arr[0]`으로 배열의 길이를 계산할 수 있다.
{: .prompt-tip }

> 배열이나 문자열을 순회할 때에는 `size_t` 형식의 인덱스 변수를 선언하는 것이 국룰이다. 하지만 밑의 코드에서는 그냥 `int`를 썼다. (필자의 숙련도가 부족하니 너그러운 이해를 바란다.) 여담이지만, 위의 `sizeof` 연산자는 `size_t`를 반환한다.
{: .prompt-info }

```c++
int max_arr(int *arr, int n)
{
    int max = arr[0]; // 배열에 완전 탐색 시키면서 최대값을 업데이트 할 것임
    for (int i = 1; i < n; i++) // i가 0부터 시작하지 않는 이유는? 정답은 밑에...
    {
        if (arr[i] > max)
        {
            max = arr[i]; // 순회하고 있는 원소가 기존의 최대값보다 크면 최대값 업데이트
        }
    }
    return max;
}
```

> 정답: 이미 max는 arr[0]이므로 밑의 if문을 통과하지 않을 것이 자명하다.
{: .prompt-info }

# 두 변수의 값 바꾸기

## 포인터를 이용하여 값을 swap하는 함수

> main의 변수를 인자로 받을 때 call-by-value 방식을 사용하면 단순히 복사된 값을 사용하기 때문에 메모리도 낭비되고, 원본 값을 수정하지도 못한다. 따라서 많은 경우에 포인터로 인자를 넘기는 call-by-reference를 사용한다.
{: .prompt-info }

> call-by-reference의 장점은 무엇일까?
> 1. `main`의 원본 변수 값에 접근하여 다이렉트로 수정할 수 있다.
> 2. 여러 값을 처리(수정)해야되는 상황에서 유용하다. (이 경우 변수의 포인터를 이용하여 값들만 수정하고, 함수의 반환은 `void`형식(`return ;`)이다.)
{: .prompt-tip }

```c++
void swap(int *a, int *b)
{
    int temp;
    temp = *a;
    *a = *b;
    *b = temp;    
    return ;
}
```

## 배열의 두 원소를 swap하는 함수

```c++
void swap_arr(int *arr, int i, int j)
{
    int temp;
    temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;    
    return ;
}
```

> 알고 있을 것 같기는 하지만... `arr[i]`는 `*(arr + i)`로 처리된다. 즉 결국 `[]` 연산자는 포인터 연산 + 값 뽑아오기 연산인 셈.
{: .prompt-info }


# 배열 회전

## 1차원 배열 회전 (오른쪽으로 한 칸)

![rotating-1d-array](/assets/img/2022-04-01-algorithm-with-ps-00/%EB%8B%A4%EC%9A%B4%EB%A1%9C%EB%93%9C.png){: w="400" }
_1차원 배열 회전 (오른쪽)_

```c++
void right_rotate(int *arr, int s, int t)
{
    int last = arr[t];
    for (int i = t; i > s; i--) // 왜 거꾸로 탐색할까? 밑에 빨간 영역 참고
    {
        arr[i] = arr[i - 1]; // 요게 포인트! 밑에 자세한 설명...
    }
    arr[s] = last;
    return ;
}
```

> 설명 : 위와 같은 상황에서, `A = B`라는 연산자를 바라볼 때 **A는 나중 상황**, **B는 이전 상황**으로 볼 수 있다. 즉, 위 그림에서 아래에 있는 배열은 A, 위에 있는 배열은 B인 셈이다. 이것을 먼저 고려한다면, 위 코드를 쉽게 작성할 수 있을 것이다.
{: .prompt-tip }

> 이런 식으로 적으면 망한다!
> ```c++
> for (int i = s; i < t; i++)
> {
>     arr[i + 1] = arr[i];
> }
> ```
> 왜 안 되는지는 스스로 고민해보고 읽기를... 이 코드가 정상적으로 작동하지 않는 이유는, `arr[s + 1`의 값을 `arr[s]`로 고친 이후에 `arr[s + 2]`의 값을 `arr[s + 1]`로 고치기 때문이다. 즉, 이후에 필요한 변수의 값이 이전에 수정되는, 배열의 모든 원소가 `arr[s]`가 되는 결과를 초래한다. 필자는 이미 한 번 실수했으니 독자들은 그러지 말기를...
{: .prompt-danger }

위와 같은 생각을 했지만, 그럴 경우 범위가 애매해진다. 따라서 `last`라는 변수에 따로 `arr[t]`를 저장하고, 후에 `arr[s]`에 대입해주자.

## 1차원 배열 회전 (왼쪽으로 한 칸)

![rotating-1d-array](/assets/img/2022-04-01-algorithm-with-ps-00/unnamed.png){: w="400" }
_1차원 배열 (왼쪽)_

```c++
void left_rotate(int *arr, int s, int t)
{
    int first = arr[s];
    for (int i = s; i < t; i++)
    {
        arr[i] = arr[i + 1];
    }
    arr[t] = first;
    return ;
}
```

위의 1차원 배열 회전 (오른쪽으로 한 칸)을 참고하면 쉽게 작성할 수 있다. 이때도 마찬가지로 배열의 모든 원소가 한 원소로 덮어써지지 않도록 주의하자.

## 1차원 배열 회전 (오른쪽으로 k칸)

위의 1차원 배열 회전 (오른쪽으로 한 칸)을 k번 반복하면 되지만, 너무 NAIVE하다.

> 용어에 익숙치 않은 독자들을 위해 소개하자면, **NAIVE하다**의 뜻은 **순진하다, 무식하다** 정도의 뜻이다. (솔직히 무식하게 k번 움직이는 것보다는 더 멋진 코드가 있을 것. 이는 직감적으로 알 수 있음.)
{: .prompt-tip }

따라서 General한 Form을 찾아보자! 우선 오른쪽으로 한 칸이니까 오른쪽에서 왼쪽으로 배열을 돌아야겠다는 생각이 든다. (이 문장이 이해가 안된다면, 위의 빨간 영역을 다시 읽어보자.)

```c++
void right_rotate_k(int *arr, int s, int t, int k)
{
    int *temp_arr;
    temp_arr = (int *)malloc(k * sizeof(int));
    for (int i = 0; i < k; i++)
    {
        temp_arr[i] = arr[t - k + 1 + i];
    }
    for (int j = t; j >= s + k; j--)
    {
        arr[j] = arr[j - k];
    }
    for (int l = 0; l < k; l++)
    {
        arr[s + l] = temp_arr[l];
    }
    return;
}
```

우선 k칸만큼 회전할 때 임시적으로 저장해야 하는 놈들은 k개가 된다. 이것을 배열로 저장하자. 사이즈가 달라지므로 동적할당을 사용했다. 동적할당에 대해 모르겠다면 지금은 메모리를 미리 찜해놓는다 정도의 개념으로 알아두자. 중요한 것은 위의 for문과 배열의 index가 왜 저렇게 쓰였는지 정확하게 이해하는 것이다.

# 은행 대기번호 관리 (큐)

큐(Queue)는 먼저 들어간 데이터가 먼저 나오는 자료구조를 말한다. (선입선출)

## 배열로 큐 작성하기

이거 왜 안되냐... 여기까지 쓸랭.. ㅠ